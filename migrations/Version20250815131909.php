<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250815131909 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `club` (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, cover VARCHAR(255) DEFAULT NULL, description LONGTEXT NOT NULL, lat DOUBLE PRECISION DEFAULT NULL, lon DOUBLE PRECISION DEFAULT NULL, location VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD club_created_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649172650A9 FOREIGN KEY (club_created_id) REFERENCES `club` (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649172650A9 ON user (club_created_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649172650A9');
        $this->addSql('DROP TABLE `club`');
        $this->addSql('DROP INDEX UNIQ_8D93D649172650A9 ON `user`');
        $this->addSql('ALTER TABLE `user` DROP club_created_id');
    }
}
