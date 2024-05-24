CREATE DATABASE IF NOT EXISTS   SocialNetwork;

use SocialNetwork;

CREATE Table Users  (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    avatar VARCHAR(200),
    interests SET('programar', 'hacer ejercicio', 'correr','jugar videojuegos' ) NULL,
    carrera ENUM('ingeniera en software', 'ingenieria petrolera', 'ingenieria ambiental', 'ingenieria mecatronica') NULL,
    estado ENUM('Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Ciudad de México', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas') NOT NULL DEFAULT 'Ciudad de México', 
    grupo CHAR(10) NULL,
    edad SMALLINT UNSIGNED NULL,
    rol ENUM('estudiante', 'docente') NOT NULL DEFAULT 'docente'
);
