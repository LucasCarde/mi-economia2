import * as React from 'react';


export default function agregarMonto() {
    return <div>
        <div class="row g-3">
            <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="City" aria-label="City"></input>
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="State" aria-label="State"></input>
            </div>
            <div class="col-sm">
                <input type="text" class="form-control" placeholder="Zip" aria-label="Zip"></input>
            </div>
        </div>

    </div>
}