/*
  Warnings:

  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Experience";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "experiences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "company_url" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATETIME,
    "descriptions" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "is_personal_project" BOOLEAN NOT NULL DEFAULT false,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "github_url" TEXT,
    "project_url" TEXT,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATETIME,
    "role" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "experience_id" TEXT NOT NULL,
    CONSTRAINT "projects_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experiences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_projects" ("category", "descriptions", "end_date", "experience_id", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title") SELECT "category", "descriptions", "end_date", "experience_id", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
