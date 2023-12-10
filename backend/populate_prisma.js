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
      name: 'Tag1',
    },
  });

  const tag2 = await prisma.tag.create({
    data: {
      name: 'Tag2',
    },
  });

  // Insert courses
  const course1 = await prisma.course.create({
    data: {
      title: 'Course 1',
      description: 'Description 1',
      author: {
        connect: { id: user1.id },
      },
      tags: ['Tag1', 'Tag2'],
    },
  });

  const course2 = await prisma.course.create({
    data: {
      title: 'Course 2',
      description: 'Description 2',
      author: {
        connect: { id: user2.id },
      },
      tags: ['Tag1'],
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
      total_readers: 30,
      course: {
        connect: { id: course2.id },
      },
    },
  });

  // Insert course feedback
  await prisma.course_feedback.create({
    data: {
      feedback_value: 4,
      feedback_text: 'Good course!',
      course: {
        connect: { id: course1.id },
      },
      author: {
        connect: { id: user1.id },
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
