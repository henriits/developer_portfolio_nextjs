-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "githubLink" TEXT,
    "liveLink" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
