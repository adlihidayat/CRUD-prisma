/*
  Warnings:

  - Added the required column `video` to the `food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food" ADD COLUMN     "video" TEXT NOT NULL;
