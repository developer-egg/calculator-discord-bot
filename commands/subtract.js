const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("subtract")
        .setDescription('Replies with the difference of the two numbers')
        .addStringOption(option => 
            option
                .setName("firstnumber")
                .setDescription("The first number to subtract")
                .setRequired(true))
        .addStringOption(option => 
            option
                .setName("secondnumber")
                .setDescription("The second number to subtract")
                .setRequired(true)),
    async execute(interaction) {
        const firstNumber = parseFloat(interaction.options.getString("firstnumber"))
        const secondNumber = parseFloat(interaction.options.getString("secondnumber"))

        await interaction.reply(`The result is: ${firstNumber - secondNumber}`);
    }   
};