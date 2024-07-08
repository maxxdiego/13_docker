'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Cadastrar o registro na tabela "AboutsCompanies"
    return queryInterface.bulkInsert('AboutsCompanies', [
      {
        title: 'Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.',
        description: 'Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.',
        image: 'premium_v1.jpg',
        situationAboutId: 1,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.',
        description: 'Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.',
        image: 'premium_v2.jpg',
        situationAboutId: 1,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.',
        description: 'Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.',
        image: 'premium_v3.jpg',
        situationAboutId: 2,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.',
        description: 'Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.',
        image: 'premium_v5.jpg',
        situationAboutId: 1,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  // Limpar os registros da tabela "AboutsCompanies"
  async down (queryInterface) {
    await queryInterface.bulkDelete('AboutsCompanies', null, {});
  }
};
