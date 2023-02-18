const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("add")
        .setDescription('Replies with the sum of the two numbers')
        .addStringOption(option => 
            option
                .setName("firstnumber")
                .setDescription("The first number to add")
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName("secondnumber")
                .setDescription("The second number to add")
                .setRequired(true)),
    async execute(interaction) {
        const firstNumber = parseFloat(interaction.options.getString("firstnumber"))
        const secondNumber = parseFloat(interaction.options.getString("secondnumber"))

        await interaction.reply(`The result is: ${firstNumber + secondNumber}`);
    }   
};