<?php

namespace App\Http\Controllers;

use App\Models\SchedService;
use App\Http\Requests\StoreSchedServiceRequest;
use App\Http\Requests\UpdateSchedServiceRequest;
use Illuminate\Http\Request;


class SchedServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Home');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        sleep(1);
        $fields = $request->validate([
            'frequency' => 'required|in:recurring,onetime',
            'startdate' => 'required|date|after_or_equal:today',
            'days'       => 'required|in:Mon,Tue,Wed,Thu,Fri,Sat,Sun',
            'times'      => 'required|in:Morning,Afternoon,Evening',
            'notes'      => 'nullable|string|max:1000',
        ]);

        $fields['notes'] = isset($fields['notes']) 
        ? strip_tags(trim($fields['notes'])) 
        : null;


        SchedService::create($fields);

        // return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $schedService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $schedService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SchedService $schedService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SchedService $schedService)
    {
        //
    }
}
