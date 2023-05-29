/*
  Warnings:

  - The primary key for the `projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `techs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `experience_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
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
    CONSTRAINT "projects_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_projects" ("category", "descriptions", "end_date", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title") SELECT "category", "descriptions", "end_date", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
CREATE TABLE "new_techs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_techs" ("id", "name") SELECT "id", "name" FROM "techs";
DROP TABLE "techs";
ALTER TABLE "new_techs" RENAME TO "techs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
