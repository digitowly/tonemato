-- CreateEnum
CREATE TYPE "Intrument" AS ENUM ('GUITAR', 'BASS', 'DRUMS');

-- CreateTable
CREATE TABLE "BandPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchType" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "instrument" "Intrument" NOT NULL,
    "bandPostId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BandPost" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchType" ADD FOREIGN KEY ("bandPostId") REFERENCES "BandPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;
