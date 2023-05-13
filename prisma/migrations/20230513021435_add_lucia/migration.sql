/*
  Warnings:

  - You are about to drop the column `expires` on the `key` table. All the data in the column will be lost.
  - You are about to drop the column `primary_key` on the `key` table. All the data in the column will be lost.
  - Added the required column `primary` to the `key` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "key" DROP COLUMN "expires",
DROP COLUMN "primary_key",
ADD COLUMN     "primary" BOOLEAN NOT NULL;
