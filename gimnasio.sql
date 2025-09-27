CREATE DATABASE gimnasio;
USE gimnasio;

-- 1. Tabla de ENTRENADORES
CREATE TABLE IF NOT EXISTS Entrenadores (
    idEntrenador INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(20),
    especialidad VARCHAR(100),
    activo BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (idEntrenador)
);

-- 2. Tabla de CLASES
CREATE TABLE IF NOT EXISTS Clases (
    idClase INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    horario TIME NOT NULL,
    dia_semana ENUM('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo') NOT NULL,
    duracion_min INT DEFAULT 60,
    capacidad_max INT DEFAULT 20,
    idEntrenador INT NOT NULL,
    activa BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (idClase),
    FOREIGN KEY (idEntrenador) REFERENCES Entrenadores(idEntrenador) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- 3. Tabla de MEMBRESÍAS (tipos de planes)
CREATE TABLE IF NOT EXISTS Membresias (
    idMembresia INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100) NOT NULL UNIQUE, -- Ej: "Básica", "Premium", "Familiar"
    descripcion TEXT,
    precio_mensual DECIMAL(10, 2) NOT NULL,
    duracion_dias INT NOT NULL, -- Ej: 30, 90, 365
    activa BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (idMembresia)
);

-- 4. Tabla de MIEMBROS
CREATE TABLE IF NOT EXISTS Miembros (
    idMiembro INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefono VARCHAR(20),
    fecha_registro DATE,
    idMembresia INT,
    fecha_inicio_membresia DATE,
    fecha_fin_membresia DATE,
    activo BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (idMiembro),
    FOREIGN KEY (idMembresia) REFERENCES Membresias(idMembresia) ON DELETE SET NULL ON UPDATE CASCADE
);

-- 5. Tabla intermedia: INSCRIPCIONES A CLASES (relación muchos a muchos)
CREATE TABLE IF NOT EXISTS InscripcionesClases (
    idInscripcion INT AUTO_INCREMENT NOT NULL,
    idMiembro INT NOT NULL,
    idClase INT NOT NULL,
    fecha_inscripcion DATE,
    asistio BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (idInscripcion),
    UNIQUE KEY unique_inscripcion (idMiembro, idClase), 
    FOREIGN KEY (idMiembro) REFERENCES Miembros(idMiembro) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idClase) REFERENCES Clases(idClase) ON DELETE CASCADE ON UPDATE CASCADE
);

---Insert to (agrega datos)

INSERT INTO Membresias (nombre, descripcion, precio_mensual, duracion_dias, activa) VALUES
('Básica', 'Acceso ilimitado al gimnasio de lunes a viernes.', 29.99, 30, TRUE),
('Premium', 'Acceso 24/7 + 2 clases grupales por semana.', 49.99, 30, TRUE),
('Familiar', 'Incluye hasta 3 miembros de la misma familia.', 89.99, 30, TRUE),
('Estudiante', 'Descuento para estudiantes con carnet vigente.', 19.99, 30, TRUE);

INSERT INTO Entrenadores (nombre, email, telefono, especialidad, activo) VALUES
('Carlos Méndez', 'carlos.mendez@gimnasio.com', '+54 11 2345-6789', 'Fuerza y acondicionamiento', TRUE),
('Lucía Fernández', 'lucia.fernandez@gimnasio.com', '+54 11 3456-7890', 'Yoga y movilidad', TRUE),
('Diego Ramírez', 'diego.ramirez@gimnasio.com', '+54 11 4567-8901', 'CrossFit', TRUE),
('Ana López', 'ana.lopez@gimnasio.com', '+54 11 5678-9012', 'Pilates', FALSE); -- Inactiva

INSERT INTO Clases (nombre, descripcion, horario, dia_semana, duracion_min, capacidad_max, idEntrenador, activa) VALUES
('Yoga Matutino', 'Clase suave de yoga para comenzar el día.', '08:00:00', 'Lunes', 60, 15, 2, TRUE),
('Yoga Matutino', 'Clase suave de yoga para comenzar el día.', '08:00:00', 'Miércoles', 60, 15, 2, TRUE),
('Yoga Matutino', 'Clase suave de yoga para comenzar el día.', '08:00:00', 'Viernes', 60, 15, 2, TRUE),
('Entrenamiento Funcional', 'Circuito de fuerza y resistencia.', '18:30:00', 'Martes', 45, 20, 1, TRUE),
('Entrenamiento Funcional', 'Circuito de fuerza y resistencia.', '18:30:00', 'Jueves', 45, 20, 1, TRUE),
('CrossFit Intensivo', 'WODs de alta intensidad.', '19:00:00', 'Lunes', 60, 12, 3, TRUE),
('CrossFit Intensivo', 'WODs de alta intensidad.', '19:00:00', 'Miércoles', 60, 12, 3, TRUE),
('Pilates Reformer', 'Trabajo de control y estabilidad.', '17:00:00', 'Sábado', 50, 10, 4, FALSE); -- Clase inactiva (entrenadora inactiva)

INSERT INTO Miembros (nombre, email, telefono, fecha_registro, idMembresia, fecha_inicio_membresia, fecha_fin_membresia, activo) VALUES
('María Gómez', 'maria.gomez@email.com', '+54 11 1111-2222', '2025-03-01', 2, '2025-03-01', '2025-03-31', TRUE),
('Javier Torres', 'javier.torres@email.com', '+54 11 2222-3333', '2025-02-15', 1, '2025-02-15', '2025-03-16', TRUE),
('Sofía Ruiz', 'sofia.ruiz@email.com', '+54 11 3333-4444', '2025-03-10', 3, '2025-03-10', '2025-04-09', TRUE),
('Tomás Díaz', 'tomas.diaz@email.com', '+54 11 4444-5555', '2025-01-20', 4, '2025-01-20', '2025-02-19', FALSE); -- Membresía vencida

INSERT INTO InscripcionesClases (idMiembro, idClase, fecha_inscripcion, asistio) VALUES
-- María (Premium) se inscribe a Yoga y CrossFit
(1, 1, '2025-03-02', TRUE),   -- Lunes Yoga
(1, 4, '2025-03-02', FALSE),  -- Martes Funcional
(1, 6, '2025-03-03', TRUE),   -- Lunes CrossFit

-- Javier (Básica) 
(2, 4, '2025-02-16', TRUE),
(2, 5, '2025-02-16', FALSE),

-- Sofía (Familiar) trae a su familia, pero  solo registramos su inscripción
(3, 1, '2025-03-11', TRUE),
(3, 2, '2025-03-11', TRUE),
(3, 3, '2025-03-11', FALSE);