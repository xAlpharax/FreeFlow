import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader

from sklearn.model_selection import train_test_split

# Sample data - replace this with your dataset
courses_data = [
    {"sequence": "python programming", "label": "programming"},
    {"sequence": "web development with HTML and CSS", "label": "web development"},
    # Add more data...
]

# Preprocess the data
sequences = [d["sequence"] for d in courses_data]
labels = [d["label"] for d in courses_data]

# Create a mapping from labels to unique indices
label2index = {label: idx for idx, label in enumerate(set(labels))}
index2label = {idx: label for label, idx in label2index.items()}

# Convert labels to indices
label_indices = [label2index[label] for label in labels]

# Split the data into training and testing sets
train_sequences, test_sequences, train_labels, test_labels = train_test_split(
    sequences, label_indices, test_size=0.2, random_state=42
)

# Define a simple RNN model
class CourseRecommendationModel(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_size, num_classes):
        super(CourseRecommendationModel, self).__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.rnn = nn.RNN(embedding_dim, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        x = self.embedding(x)
        _, hn = self.rnn(x)
        output = self.fc(hn[-1, :, :])
        return output

##
# Define a simple Transformer model
class CourseRecommendationModel(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_size, num_heads, num_layers, num_classes):
        super(CourseRecommendationModel, self).__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.transformer = nn.Transformer(
            d_model=embedding_dim,
            nhead=num_heads,
            num_encoder_layers=num_layers,
            num_decoder_layers=num_layers,
        )
        self.fc = nn.Linear(embedding_dim, num_classes)

    def forward(self, x):
        x = self.embedding(x)
        x = x.permute(1, 0, 2)  # Change the sequence length dimension
        output = self.transformer(x)
        output = output.mean(dim=0)  # Aggregate over the sequence dimension
        output = self.fc(output)
        return output

# Hyperparameters (transformer)
vocab_size = 10000  # Replace with the actual vocabulary size
embedding_dim = 50
num_heads = 4
num_layers = 2
num_classes = len(set(labels))
batch_size = 32
learning_rate = 0.001
epochs = 10
##

# Hyperparameters
vocab_size = 10000  # Replace with the actual vocabulary size
embedding_dim = 50
hidden_size = 64
num_classes = len(set(labels))
batch_size = 32
learning_rate = 0.001
epochs = 10

# Convert sequences to numerical format
# In a real-world scenario, you might want to use tokenization libraries like spaCy or nltk.
# For simplicity, we'll represent each word with an index in this example.
sequence_indices = [[vocab_size // 2 if word == "python" else vocab_size // 3 for word in sequence.split()] for sequence in train_sequences]

# Create DataLoader for training
class CourseDataset(Dataset):
    def __init__(self, sequences, labels):
        self.sequences = sequences
        self.labels = labels

    def __len__(self):
        return len(self.sequences)

    def __getitem__(self, idx):
        return torch.tensor(self.sequences[idx]), torch.tensor(self.labels[idx])

train_dataset = CourseDataset(sequence_indices, train_labels)
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)

## transformer
# Initialize the model, loss function, and optimizer
#model = CourseRecommendationModel(vocab_size, embedding_dim, embedding_dim, num_heads, num_layers, num_classes)

# Initialize the model, loss function, and optimizer
model = CourseRecommendationModel(vocab_size, embedding_dim, hidden_size, num_classes)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=learning_rate)

# Training loop
for epoch in range(epochs):
    for batch_seq, batch_labels in train_loader:
        optimizer.zero_grad()
        output = model(batch_seq)
        loss = criterion(output, batch_labels)
        loss.backward()
        optimizer.step()

    print(f"Epoch {epoch + 1}/{epochs}, Loss: {loss.item()}")

# Save the trained model
#torch.save(model.state_dict(), 'transformer_course_recommendation_model.pth')
torch.save(model.state_dict(), 'course_recommendation_model.pth')

# Evaluate on test data (similar preprocessing as done for training data)
test_sequence_indices = [[vocab_size // 2 if word == "python" else vocab_size // 3 for word in sequence.split()] for sequence in test_sequences]
test_dataset = CourseDataset(test_sequence_indices, test_labels)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

model.eval()
correct = 0
total = 0

with torch.no_grad():
    for batch_seq, batch_labels in test_loader:
        output = model(batch_seq)
        _, predicted = torch.max(output, 1)
        total += batch_labels.size(0)
        correct += (predicted == batch_labels).sum().item()

accuracy = correct / total
print(f"Accuracy on test data: {accuracy * 100:.2f}%")
