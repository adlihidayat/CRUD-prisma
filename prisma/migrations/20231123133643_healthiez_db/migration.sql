-- CreateTable
CREATE TABLE "food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "howToCook" TEXT NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ingredientToitem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "food_ingredientId_key" ON "food"("ingredientId");

-- CreateIndex
CREATE UNIQUE INDEX "_ingredientToitem_AB_unique" ON "_ingredientToitem"("A", "B");

-- CreateIndex
CREATE INDEX "_ingredientToitem_B_index" ON "_ingredientToitem"("B");

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ingredientToitem" ADD CONSTRAINT "_ingredientToitem_A_fkey" FOREIGN KEY ("A") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ingredientToitem" ADD CONSTRAINT "_ingredientToitem_B_fkey" FOREIGN KEY ("B") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
