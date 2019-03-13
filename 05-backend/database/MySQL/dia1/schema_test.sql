-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema schema_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema schema_test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `schema_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `schema_test` ;

-- -----------------------------------------------------
-- Table `schema_test`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_test`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `telefono` INT NULL,
  PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_test`.`razas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_test`.`razas` (
  `idrazas` INT NOT NULL AUTO_INCREMENT,
  `raza_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrazas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `schema_test`.`pets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `schema_test`.`pets` (
  `idpets` INT NOT NULL AUTO_INCREMENT,
  `petname` VARCHAR(45) NOT NULL,
  `pettype` ENUM("perro", "gato") NOT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  `razas_idrazas` INT NOT NULL,
  PRIMARY KEY (`idpets`),
  INDEX `fk_pets_usuarios_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  INDEX `fk_pets_razas1_idx` (`razas_idrazas` ASC) VISIBLE,
  CONSTRAINT `fk_pets_usuarios`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `schema_test`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pets_razas1`
    FOREIGN KEY (`razas_idrazas`)
    REFERENCES `schema_test`.`razas` (`idrazas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
