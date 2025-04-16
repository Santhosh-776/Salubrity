export interface LocalBook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  pdfPath: string;
  tags: string[];
  pageCount: number;
  publishedDate: string;
}

const localBooksData: LocalBook[] = [
  {
    id: "book1",
    title: "The Art of Mindfulness",
    author: "Thomas Anderson",
    description: "A comprehensive guide to mindfulness and meditation practices for everyday life.",
    coverImage: "/placeholder.jpg",
    pdfPath: "/books/Book1.pdf",
    tags: ["Mindfulness", "Meditation", "Self-help"],
    pageCount: 230,
    publishedDate: "2022-05-15"
  },
  {
    id: "book2",
    title: "Healthy Living",
    author: "Sarah Miller",
    description: "Explore the fundamentals of healthy living with practical advice on nutrition and exercise.",
    coverImage: "/placeholder.jpg",
    pdfPath: "/books/Book2.pdf",
    tags: ["Health", "Nutrition", "Fitness"],
    pageCount: 186,
    publishedDate: "2021-11-03"
  },
  {
    id: "book3",
    title: "Modern Psychology",
    author: "David Thompson",
    description: "An introduction to modern psychological theories and their applications.",
    coverImage: "/placeholder.jpg",
    pdfPath: "/books/Book3.pdf",
    tags: ["Psychology", "Science", "Mental Health"],
    pageCount: 312,
    publishedDate: "2023-01-20"
  },
  {
    id: "book4",
    title: "Digital Wellness",
    author: "Mia Johnson",
    description: "How to maintain mental health in the digital age with practical techniques.",
    coverImage: "/placeholder.jpg",
    pdfPath: "/books/Book4.pdf",
    tags: ["Technology", "Mental Health", "Digital"],
    pageCount: 164,
    publishedDate: "2022-08-12"
  },
  {
    id: "book5",
    title: "Sleep Science",
    author: "Robert Chen",
    description: "The science of sleep and how to improve your sleep quality for better health.",
    coverImage: "/placeholder.jpg",
    pdfPath: "/books/Book5.pdf",
    tags: ["Sleep", "Health", "Science"],
    pageCount: 225,
    publishedDate: "2021-07-30"
  },
  {
    id: "book6",
    title: "Stress Management",
    author: "Emily Brooks",
    description: "Practical techniques for managing stress in your personal and professional life.",
    coverImage: "/placeholder.jpg",
    pdfPath: "/books/Book6.pdf",
    tags: ["Stress", "Self-help", "Mental Health"],
    pageCount: 198,
    publishedDate: "2023-03-11"
  }
];

export default localBooksData; 