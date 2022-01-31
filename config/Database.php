<?php
/*
    Databese Class, used to connect to database

    @file: Database.php
    @author: Darbaz Ali
    @date: Jan 31, 2022
 */

 class Database {

    // Database Params
    private $host = 'localhost';
    private $db_name = 'flyspace';
    private $username = 'root';
    private $password = 'root';
    private $conn;


    // DB connection
    public connection connect() {
        $this->conn = null;

        try{
            $this->conn = new PDO('mysql:host='. $this->host . ';dbname='. $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO:ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch (PDOExeption $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }

        return $this->conn;
    }
 }

 ?>