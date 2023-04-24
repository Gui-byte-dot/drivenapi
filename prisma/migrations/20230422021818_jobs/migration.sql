-- CreateTable
CREATE TABLE "info" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "info_pkey" PRIMARY KEY ("id")
);
