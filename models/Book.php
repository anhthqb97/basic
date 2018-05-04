<?php

namespace app\models; 

use Yii; 

/** 
 * This is the model class for table "book". 
 * 
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $author
 * @property string $publisher
 * @property int $year
 */ 
class Book extends \yii\db\ActiveRecord
{ 
    /** 
     * {@inheritdoc} 
     */ 
    public static function tableName() 
    { 
        return 'book'; 
    } 

    /** 
     * {@inheritdoc} 
     */ 
    public function rules() 
    { 
        return [
            [['id', 'title', 'author', 'publisher', 'year'], 'required'],
            [['id', 'year'], 'default', 'value' => null],
            [['id', 'year'], 'integer'],
            [['title', 'description', 'author', 'publisher'], 'string'],
            [['id'], 'unique'],
        ]; 
    } 

    /** 
     * {@inheritdoc} 
     */ 
    public function attributeLabels() 
    { 
        return [ 
            'id' => 'ID',
            'title' => 'Title',
            'description' => 'Description',
            'author' => 'Author',
            'publisher' => 'Publisher',
            'year' => 'Year',
        ]; 
    } 
} 