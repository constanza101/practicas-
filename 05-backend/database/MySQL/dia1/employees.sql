-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema schema_empleados
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema schema_empleados
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `schema_empleados` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `schema_empleados` ;

-- -----------------------------------------------------
-- Table `schema_empleados`.`salary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_empleados`.`salary` (
  `idsalary` INT NOT NULL AUTO_INCREMENT,
  `salary` INT NOT NULL,
  `from_date` DATE NOT NULL,
  `to_date` DATE NOT NULL,
  PRIMARY KEY (`idsalary`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_empleados`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_empleados`.`employees` (
  `idemployees` INT NOT NULL AUTO_INCREMENT,
  `birth_date` DATE NOT NULL,
  `first_name` VARCHAR(14) NOT NULL,
  `last_name` VARCHAR(16) NOT NULL,
  `gender` ENUM("M", "F") NOT NULL,
  `hire_date` DATE NOT NULL,
  `salary_idsalary` INT NOT NULL,
  PRIMARY KEY (`idemployees`),
  INDEX `fk_employees_salary_idx` (`salary_idsalary` ASC) VISIBLE,
  CONSTRAINT `fk_employees_salary`
    FOREIGN KEY (`salary_idsalary`)
    REFERENCES `schema_empleados`.`salary` (`idsalary`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_empleados`.`departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_empleados`.`departments` (
  `iddepartments` INT NOT NULL AUTO_INCREMENT,
  `dept_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddepartments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_empleados`.`dept_emp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_empleados`.`dept_emp` (
  `iddept_emp` INT NOT NULL AUTO_INCREMENT,
  `from_date` DATE NOT NULL,
  `to_date` DATE NOT NULL,
  `employees_idemployees` INT NOT NULL,
  `departments_iddepartments` INT NOT NULL,
  PRIMARY KEY (`iddept_emp`),
  INDEX `fk_dept_emp_employees1_idx` (`employees_idemployees` ASC) VISIBLE,
  INDEX `fk_dept_emp_departments1_idx` (`departments_iddepartments` ASC) VISIBLE,
  CONSTRAINT `fk_dept_emp_employees1`
    FOREIGN KEY (`employees_idemployees`)
    REFERENCES `schema_empleados`.`employees` (`idemployees`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dept_emp_departments1`
    FOREIGN KEY (`departments_iddepartments`)
    REFERENCES `schema_empleados`.`departments` (`iddepartments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_empleados`.`dept_manager`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_empleados`.`dept_manager` (
  `iddept_manager` INT NOT NULL AUTO_INCREMENT,
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  `employees_idemployees` INT NOT NULL,
  `departments_iddepartments` INT NOT NULL,
  PRIMARY KEY (`iddept_manager`),
  INDEX `fk_dept_manager_employees1_idx` (`employees_idemployees` ASC) VISIBLE,
  INDEX `fk_dept_manager_departments1_idx` (`departments_iddepartments` ASC) VISIBLE,
  CONSTRAINT `fk_dept_manager_employees1`
    FOREIGN KEY (`employees_idemployees`)
    REFERENCES `schema_empleados`.`employees` (`idemployees`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dept_manager_departments1`
    FOREIGN KEY (`departments_iddepartments`)
    REFERENCES `schema_empleados`.`departments` (`iddepartments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_empleados`.`titles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_empleados`.`titles` (
  `idtitles` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `from_date` DATE NOT NULL,
  `employees_idemployees` INT NOT NULL,
  PRIMARY KEY (`idtitles`),
  INDEX `fk_titles_employees1_idx` (`employees_idemployees` ASC) VISIBLE,
  CONSTRAINT `fk_titles_employees1`
    FOREIGN KEY (`employees_idemployees`)
    REFERENCES `schema_empleados`.`employees` (`idemployees`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
