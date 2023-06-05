/*
  Warnings:

  - You are about to drop the column `descriptions` on the `projects` table. All the data in the column will be lost.
  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
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
INSERT INTO "new_projects" ("category", "end_date", "experience_id", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title") SELECT "category", "end_date", "experience_id", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
CREATE TABLE "new_experiences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "company_url" TEXT,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATETIME,
    "descriptions" TEXT NOT NULL,
    "is_current" BOOLEAN DEFAULT false
);
INSERT INTO "new_experiences" ("company", "company_url", "descriptions", "end_date", "id", "start_date", "title") SELECT "company", "company_url", "descriptions", "end_date", "id", "start_date", "title" FROM "experiences";
DROP TABLE "experiences";
ALTER TABLE "new_experiences" RENAME TO "experiences";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
