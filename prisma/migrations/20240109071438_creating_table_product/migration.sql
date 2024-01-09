-- CreateTable
CREATE TABLE "products" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "nameProduct" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
