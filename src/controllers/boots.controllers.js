import Boots from "../models/Boot.js";
import BootsServices from "../services/boots.services.js";

//testando o commit
const bootsServices = new BootsServices();

class BootsControllers {
  async getAllBoots(req, res) {
    try {
      const boots = await bootsServices.getAllBoots();
      res.send(boots);
    } catch (err) {
      res.status(err.status).send({ message: err.message });
    }
  }

  async getBootById(req, res) {
    const id = req.params.id;
    const selectedBoot = await bootsServices.getBootById({ id });
    res.send(selectedBoot);
  }

  async createBoot(req, res) {
    const { name, description, price, img } = req.body;
    try {
      const createdBoot = await bootsServices.createBoot({
        name,
        description,
        price,
        img,
      });
      res.status(201).send(createdBoot);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Something went wrong" });
    }
  }

  async updateBoot(req, res) {
    const { name, description, price, img } = req.body;
    const id = req.params.id;
    try {
      const updatedBoot = await bootsServices.updateBoot({
        name,
        description,
        price,
        img,
        id,
      });
      res.send(updatedBoot);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message:
          "Internal error: Something went wrong. Check console log for more information.",
      });
    }
  }

  async deleteBoot(req, res) {
    const id = req.params.id;
    const deletedBoot = await bootsServices.deleteBoot({id});
    res.sendStatus(204);
  }
}

export default BootsControllers;
