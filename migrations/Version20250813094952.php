<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250813094952 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE accessory ADD photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE fin ADD photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE leash ADD photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE wetsuit ADD photo VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `accessory` DROP photo');
        $this->addSql('ALTER TABLE `fin` DROP photo');
        $this->addSql('ALTER TABLE `leash` DROP photo');
        $this->addSql('ALTER TABLE `wetsuit` DROP photo');
    }
}
