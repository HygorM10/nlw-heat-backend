import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {

    const { message } = request.body;
    const { user_id } = request;

    const service = new CreateMessageService();

    try {

      const result = await service.execute(message, user_id);

      return response.status(201).json(result);

    } catch (error) {

      return response.status(500).json({ error: error.message });

    }
  }
}

export { CreateMessageController }