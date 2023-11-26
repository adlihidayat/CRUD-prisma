/*
  Warnings:

  - You are about to drop the `_ingredientToitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `items` to the `ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ingredientToitem" DROP CONSTRAINT "_ingredientToitem_A_fkey";

-- DropForeignKey
ALTER TABLE "_ingredientToitem" DROP CONSTRAINT "_ingredientToitem_B_fkey";

-- AlterTable
ALTER TABLE "ingredient" ADD COLUMN     "items" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ingredientToitem";

-- DropTable
DROP TABLE "item";
