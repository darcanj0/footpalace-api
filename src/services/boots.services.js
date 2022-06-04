import Boots from "../models/Boot.js";

class BootsServices {
  async getAllBoots() {
    const boots = await Boots.find();
    if (boots.length === 0) {
      throw { status: 404, message: "No boots were found" };
    }
    return boots;
  }

  async getBootById({ id }) {
    const selectedBoot = await Boots.findById(id);
    return selectedBoot;
  }

  async createBoot({ name, description, price, img }) {
    const bootToCreate = { name, description, price, img };
    try {
      const createdBoot = await Boots.create(bootToCreate);
      return createdBoot;
    } catch (err) {
      throw err;
    }
  }

  async updateBoot({ name, description, price, img, id }) {
    const bootUpdate = { name, description, price, img };
    try {
      await Boots.updateOne({_id: id}, bootUpdate);
      const updatedBoot = await Boots.findById(id);
      return updatedBoot;
    } catch (error) {
      throw error;
    }
  }

  async deleteBoot({id}) {
    return await Boots.findByIdAndDelete(id);
  }
}

export default BootsServices;
