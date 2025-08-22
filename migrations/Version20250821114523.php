<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250821114523 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE accessory CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE article CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE board CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE club CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE event CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE fin CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE leash CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE media CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE session CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE spot CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE wetsuit CHANGE visibility visibility JSON NOT NULL COMMENT \'(DC2Type:json)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `accessory` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `article` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `board` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `club` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `event` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `fin` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `leash` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `media` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `session` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `spot` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE `wetsuit` CHANGE visibility visibility VARCHAR(255) DEFAULT NULL');
    }
}
