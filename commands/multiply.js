const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("multiply")
        .setDescription('Replies with the product of the two numbers')
        .addStringOption(option => 
            option
                .setName("firstnumber")
                .setDescription("The first number to multiply")
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName("secondnumber")
                .setDescription("The second number to multiply")
                .setRequired(true)),
    async execute(interaction) {
        const firstNumber = parseFloat(interaction.options.getString("firstnumber"))
        const secondNumber = parseFloat(interaction.options.getString("secondnumber"))

        await interaction.reply(`The result is: ${firstNumber * secondNumber}`);
    }   
};