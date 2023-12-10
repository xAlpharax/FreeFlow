const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedDatabase() {
  // Insert users
  const user1 = await prisma.user.create({
    data: {
      user_data: {
        create: {
          total_seconds: 1000,
          total_articles: 5,
        },
      },
      email: 'user1@example.com',
      password: 'hashedPassword1',
      username: 'user1',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      user_data: {
        create: {
          total_seconds: 2000,
          total_articles: 10,
        },
      },
      email: 'user2@example.com',
      password: 'hashedPassword2',
      username: 'user2',
    },
  });

  // Insert tags
  const tag1 = await prisma.tag.create({
    data: {
      name: 'Programming',
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: 'Science',
    },
  });

  // Insert courses
  const course1 = await prisma.course.create({
    data: {
      title: 'Introduction to Computer Science',
      description: 'https://pll.harvard.edu/course/cs50-introduction-computer-science',
      author: {
        connect: { id: user1.id },
      },
      tags: ['Programming'],
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'Introduction to Artificial Intelligence with Python',
      description: 'https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python',
      author: {
        connect: { id: user2.id },
      },
      tags: ['Programming', 'Science'],
    },
  });

  // Insert course data
  const courseData1 = await prisma.course_data.create({
    data: {
      total_readers: 50,
      course: {
        connect: { id: course1.id },
      },
    },
  });

  const courseData2 = await prisma.course_data.create({
    data: {
      total_readers: 700,
      course: {
        connect: { id: course2.id },
      },
    },
  });

  // Insert course feedback
  await prisma.course_feedback.create({
    data: {
      feedback_value: 5,
      feedback_text: 'Great course!',
      course: {
        connect: { id: course2.id },
      },
      author: {
        connect: { id: user2.id },
      },
    },
  });

  console.log('Data seeding completed.');
}

seedDatabase()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
