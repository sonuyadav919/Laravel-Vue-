<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\School;

class SchoolController extends Controller
{
  public function index()
  {
      return School::all();
  }

  public function show($id)
  {
      return School::findOrFail($id);
  }

  public function update(Request $request, $id)
  {
      $this->validate($request, [
        'name'        => 'required|min:5',
        'city' => 'required',
        'state' => 'required',
      ]);

      $School = School::findOrFail($id);
      $School->update($request->all());

      return $School;
  }

  public function store(Request $request)
  {
      $this->validate($request, [
          'name'        => 'required|min:5',
          'city' => 'required',
          'state' => 'required',
      ]);

      $School = School::create($request->all());
      return $School;
  }

  public function destroy($id)
  {
      $School = School::findOrFail($id);
      $School->delete();
      return '';
  }
}
