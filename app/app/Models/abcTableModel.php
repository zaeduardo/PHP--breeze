<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AbcTableModel; // Corrigindo o nome do modelo

class AbcTableController extends Controller
{
    public function salvar(Request $request)
    {
        // Valide os dados do formulário, se necessário
        $dadosValidados = $request->validate([
            'campo1' => 'required',
            'campo2' => 'required',
            // Adicione outras regras de validação conforme necessário
        ]);

        // Crie uma nova instância do modelo AbcTableModel e preencha os campos com os dados do formulário
        $modelo = new AbcTableModel();
        $modelo->campo1 = $dadosValidados['campo1'];
        $modelo->campo2 = $dadosValidados['campo2'];
        // Atribua outros campos conforme necessário

        // Salve o modelo no banco de dados
        $modelo->save();

        // Retorne uma resposta, por exemplo, um redirecionamento ou uma mensagem de sucesso
        return redirect()->back()->with('success', 'Dados salvos com sucesso!');
    }
}
