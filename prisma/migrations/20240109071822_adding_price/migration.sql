/*
  Warnings:

  - Added the required column `descriptionProduct` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "nameProduct" TEXT NOT NULL,
    "descriptionProduct" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_products" ("created_at", "nameProduct", "productId") SELECT "created_at", "nameProduct", "productId" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
