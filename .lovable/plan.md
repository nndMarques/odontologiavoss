Vou ajustar o projeto para que a Vercel publique o output correto do TanStack Start em vez de servir uma página inexistente.

Plano:
1. Adicionar uma configuração `vercel.json` mínima apontando o deploy para o output `.vercel/output`, que é o formato esperado quando usamos o preset Vercel do Nitro.
2. Atualizar `vite.config.ts` para forçar o bundle Nitro com preset `vercel`, mantendo a configuração atual do TanStack Start e sem adicionar React Router DOM.
3. Se necessário, adicionar um script de build compatível com Vercel no `package.json` para gerar o output certo durante o deploy.
4. Verificar localmente o resultado do build e confirmar que a estrutura `.vercel/output` foi gerada.

Detalhes técnicos:
- O erro `404: NOT_FOUND` mostrado no domínio Vercel indica que o deploy ficou “Ready”, mas sem uma rota/saída servível para `/`.
- Este projeto é TanStack Start, não React Router DOM; a correção deve ser no preset/output de deploy, não trocando o roteador.
- O push para GitHub continuará sendo feito pela sincronização automática do Lovable após as alterações.