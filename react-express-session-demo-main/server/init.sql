-- 데이터베이스 생성
CREATE DATABASE session_demo DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

-- 데이터베이스 선택
USER session_demo;

-- 테이블 생성
CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL
);

-- 더미데이터 추가
INSERT INTO users (userId, password) VALUES ('apple', '1234');
INSERT INTO users (userId, password) VALUES ('banana', '1234');
INSERT INTO users (userId, password) VALUES ('kiwi', '1234');

-- 데이터 확인
SELECT * FROM users;

-- MySQL 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234'; 

-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- MySQL 비번 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';