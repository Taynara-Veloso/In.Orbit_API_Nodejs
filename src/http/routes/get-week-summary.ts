import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../functions/get-week-summary'

// rota que pega o resumo de metas da semana
export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary-goals', async () => {
    const { summary } = await getWeekSummary()

    return {
      summary,
    }
  })
}
