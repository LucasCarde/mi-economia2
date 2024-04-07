import * as React from 'react';
import Table from "../components/Table"
import Formulario from '@/components/Forms';

export default function Home() {
  return (
    <div className="inicio">
      <Formulario></Formulario>
      <Table className="tabla"></Table>
    </div>
  );
}
