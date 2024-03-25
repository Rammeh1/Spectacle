<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spectacle extends Model
{
    use HasFactory;

    protected $fillable = [
        'datespectacle',
        'salleID',
        'pieceID',
    ];

    public function salle()
    {
        return $this->belongsTo(Salle::class, "salleID")->withDefault();
    }
    public function piece()
    {
        return $this->belongsTo(Piece::class, "pieceID")->withDefault();
    }
}