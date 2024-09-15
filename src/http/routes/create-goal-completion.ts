import z from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { CreateGoalCompletion } from '../../functions/create-goal-completion'

// rota que cria conclusão de metas
export const createGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals-completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      await CreateGoalCompletion({
        goalId,
      })
    }
  )
}
