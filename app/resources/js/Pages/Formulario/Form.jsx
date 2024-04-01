import React from "react"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react";
import MapGPS from "@/Components/MapGps";


export default function Form({auth, form}){ 
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">GPS</h2>}
      >
        <Head title="Dashboard" />
  
        <div className=" h-dvh flex justify-center m-8">
          <div className="h-3/5 w-full px-24 ">

              <MapGPS/>
          </div>
          
        </div>
      </AuthenticatedLayout>
    );
  }
