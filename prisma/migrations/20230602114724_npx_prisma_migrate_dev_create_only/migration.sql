-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_experiences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "company_url" TEXT,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATETIME,
    "descriptions" TEXT NOT NULL,
    "is_current" BOOLEAN DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_experiences" ("company", "company_url", "descriptions", "end_date", "id", "is_current", "start_date", "title") SELECT "company", "company_url", "descriptions", "end_date", "id", "is_current", "start_date", "title" FROM "experiences";
DROP TABLE "experiences";
ALTER TABLE "new_experiences" RENAME TO "experiences";
CREATE TABLE "new_skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_skills" ("id", "name") SELECT "id", "name" FROM "skills";
DROP TABLE "skills";
ALTER TABLE "new_skills" RENAME TO "skills";
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
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    CONSTRAINT "projects_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experiences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_projects" ("category", "description", "end_date", "experience_id", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title") SELECT "category", "description", "end_date", "experience_id", "github_url", "id", "is_featured", "is_personal_project", "project_url", "responsibilities", "role", "start_date", "tech", "title" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
CREATE TABLE "new_techs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_techs" ("id", "name") SELECT "id", "name" FROM "techs";
DROP TABLE "techs";
ALTER TABLE "new_techs" RENAME TO "techs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
