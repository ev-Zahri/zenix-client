/*
  Warnings:

  - You are about to drop the column `deleteAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `volume` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to drop the column `deleteAt` on the `Wallet` table. All the data in the column will be lost.
  - You are about to alter the column `balance` on the `Wallet` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(15,2)`.
  - Added the required column `openPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'TRADE_PROFIT', 'TRADE_LOSS');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deleteAt",
DROP COLUMN "price",
ADD COLUMN     "closePrice" DECIMAL(10,5),
ADD COLUMN     "closedAt" TIMESTAMP(3),
ADD COLUMN     "commission" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "openPrice" DECIMAL(10,5) NOT NULL,
ADD COLUMN     "profit" DECIMAL(15,2),
ADD COLUMN     "sl" DECIMAL(10,5),
ADD COLUMN     "swap" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "tp" DECIMAL(10,5),
ALTER COLUMN "volume" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "status" SET DEFAULT 'OPEN';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "Wallet" DROP COLUMN "deleteAt",
ADD COLUMN     "equity" DECIMAL(15,2) NOT NULL DEFAULT 10000.00,
ALTER COLUMN "balance" SET DATA TYPE DECIMAL(15,2);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(15,2) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'COMPLETED',
    "reference" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Transaction_userId_idx" ON "Transaction"("userId");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
