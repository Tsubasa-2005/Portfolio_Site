INSERT INTO users (username, email, password)
VALUES
	('alice', 'alice@example.com', 'hashedpassword1'),
	('bob', 'bob@example.com', 'hashedpassword2'),
	('charlie', 'charlie@example.com', 'hashedpassword3'),
	('dave', 'dave@example.com', 'hashedpassword4'),
	('eve', 'eve@example.com', 'hashedpassword5'),
	('frank', 'frank@example.com', 'hashedpassword6'),
	('grace', 'grace@example.com', 'hashedpassword7'),
	('heidi', 'heidi@example.com', 'hashedpassword8'),
	('ivan', 'ivan@example.com', 'hashedpassword9'),
	('judy', 'judy@example.com', 'hashedpassword10'),
	('mallory', 'mallory@example.com', 'hashedpassword11'),
	('nathan', 'nathan@example.com', 'hashedpassword12'),
	('olivia', 'olivia@example.com', 'hashedpassword13'),
	('peggy', 'peggy@example.com', 'hashedpassword14'),
	('trent', 'trent@example.com', 'hashedpassword15');

-- projects テーブルにサンプルデータを挿入
INSERT INTO projects (user_id, title, description, project_url, repo_url, progress)
VALUES
	(1, 'Task Manager', 'A web app to manage tasks.', 'https://taskmanager.example.com', 'https://github.com/alice/task-manager', 100),
	(1, 'Task Manager', 'A web app to manage tasks.', 'https://taskmanager.example.com', 'https://github.com/alice/task-manager', 90),
	(2, 'Portfolio Site', 'Bobs personal portfolio website.', 'https://bobportfolio.example.com', 'https://github.com/bob/portfolio-site', 80),
(3, 'Blog Platform', 'A platform for creating and sharing blog posts.', 'https://blogplatform.example.com', 'https://github.com/charlie/blog-platform', 60),
(4, 'E-commerce Site', 'An online store for various products.', 'https://ecommerce.example.com', 'https://github.com/dave/ecommerce-site', 90),
(5, 'Social Media App', 'A platform for connecting with friends.', 'https://socialmedia.example.com', 'https://github.com/eve/social-media-app', 70);

INSERT INTO project_details (project_id, section_name, content)
VALUES
(1, 'Technologies Used', 'React, Node.js, PostgreSQL'),
(1, 'Features', 'Task creation, editing, deletion, and completion tracking'),
(2, 'Design', 'Responsive design using Bootstrap and custom CSS'),
(3, 'Challenges', 'Implementing a robust user authentication system'),
(4, 'Scalability', 'Designed to handle high traffic with minimal downtime'),
(5, 'Security', 'Implemented OAuth2 for secure user authentication');

INSERT INTO skills (user_id, category, description)
VALUES 
(1, 'Frontend Development', 'Experienced in building dynamic user interfaces using modern frameworks.'),
(2, 'Backend Development', 'Strong understanding of server-side development and API design.'),
(3, 'Fullstack Development', 'Capable of handling both frontend and backend tasks efficiently.');

INSERT INTO skill_details (skill_id, name, icon, url, level)
VALUES 
(1, 'React', 'https://reactjs.org/logo-og.png', 'https://reactjs.org/', 90),
(1, 'HTML/CSS', 'https://developer.mozilla.org/docs/Web/Guide/HTML/HTML5_logo_and_wordmark.png', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 85),
(2, 'Node.js', 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg', 'https://nodejs.org/', 80),
(3, 'PostgreSQL', 'https://www.postgresql.org/media/img/about/press/elephant.png', 'https://www.postgresql.org/', 75);

INSERT INTO project_skills (project_id, skill_detail_id)
VALUES 
(1, 1),
(1, 2),
(2, 3),
(3, 4);

INSERT INTO about_me (user_id, name, introduction, hobbies)
VALUES 
(1, 'Alice', 'A passionate developer with a love for frontend technologies.', 'Reading, Hiking, Gaming'),
(2, 'Bob', 'Backend specialist with a focus on scalability and performance.', 'Cycling, Cooking, Traveling'),
(3, 'Charlie', 'Fullstack developer with a knack for problem-solving.', 'Photography, Music, Coding');

INSERT INTO experiences (user_id, company, role, duration, description)
VALUES 
(1, 'TechCorp', 'Frontend Developer', '[2019-01-01, 2021-06-30]', 'Developed and maintained web interfaces for e-commerce applications.'),
(2, 'WebWorks', 'Backend Engineer', '[2018-05-01, 2020-12-31]', 'Built scalable APIs and managed database integrations.'),
(3, 'DevSolutions', 'Fullstack Developer', '[2021-02-01, infinity)', 'Worked on a variety of projects as a fullstack developer, from conception to deployment.');
