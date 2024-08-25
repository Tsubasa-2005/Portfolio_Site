CREATE TABLE users (
	id bigserial PRIMARY KEY,
	username VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password varchar(64) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
	id bigserial PRIMARY KEY,
	user_id bigint not null,
	title VARCHAR(255) NOT NULL,
	description TEXT NOT NULL,
	project_url TEXT NOT NULL,
	repo_url TEXT NOT NULL,
	progress INTEGER NOT NULL CHECK (progress >= 0 AND progress <= 100),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table  project_details (
	id bigserial PRIMARY KEY,
	project_id bigint not null,
	section_name VARCHAR(255) NOT NULL,
	content TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table project_skills (
	id bigserial PRIMARY KEY,
	project_id bigint not null,
	skill_detail_id bigint not null,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE about_me (
	id bigserial PRIMARY KEY,
	user_id bigint not null,
	name VARCHAR(255) NOT NULL,
	introduction TEXT NOT NULL,
	hobbies TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE experiences (
	id bigserial PRIMARY KEY,
	user_id bigint not null,
	company VARCHAR(255) NOT NULL,
	role VARCHAR(255) NOT NULL,
	duration daterange NOT NULL,
	description TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
	id bigserial PRIMARY KEY,
	user_id bigint not null,
	category VARCHAR(100) NOT NULL,
	description TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table skill_details (
	id bigserial PRIMARY KEY,
	skill_id bigint not null,
	name VARCHAR(100) NOT NULL,
	icon TEXT NOT NULL,
	url TEXT NOT NULL,
	level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE projects ADD CONSTRAINT fk_projects_user FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE project_details ADD CONSTRAINT fk_project_details_project FOREIGN KEY (project_id) REFERENCES projects(id);
ALTER TABLE project_skills ADD CONSTRAINT fk_project_skills_project FOREIGN KEY (project_id) REFERENCES projects(id);
ALTER TABLE about_me ADD CONSTRAINT fk_about_me_user FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE experiences ADD CONSTRAINT fk_experiences_user FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE skills ADD CONSTRAINT fk_skills_user FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE skill_details ADD CONSTRAINT fk_skill_details_skill FOREIGN KEY (skill_id) REFERENCES skills(id);
