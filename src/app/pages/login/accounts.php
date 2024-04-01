<?php
class Accounts{
 
    // database connection and table name
    private $conn;
    private $table_name = "1502527_accounts";
 
    // object properties
    public $id;
    public $username;
    public $password;
    public $fullname;
    public $type;
    public $email;
 
    public function __construct($db){
        $this->conn = $db;
    }
    
    function login(){
         $pw=sha1(htmlspecialchars(strip_tags($this->password)));
           $query = "SELECT
                    *
                    FROM
                    " . $this->table_name ." WHERE email = :email && password = :password ";  
        
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $pw);
        $stmt->execute();
 
        return $stmt;
    }
}