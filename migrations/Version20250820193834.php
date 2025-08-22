<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250820193834 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chat_group DROP FOREIGN KEY FK_6CBDA95E1A9A7125');
        $this->addSql('ALTER TABLE chat_group DROP FOREIGN KEY FK_6CBDA95EFE54D947');
        $this->addSql('DROP TABLE chat_group');
        $this->addSql('ALTER TABLE chat DROP visibility');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE chat_group (chat_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_6CBDA95EFE54D947 (group_id), INDEX IDX_6CBDA95E1A9A7125 (chat_id), PRIMARY KEY(chat_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE chat_group ADD CONSTRAINT FK_6CBDA95E1A9A7125 FOREIGN KEY (chat_id) REFERENCES chat (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE chat_group ADD CONSTRAINT FK_6CBDA95EFE54D947 FOREIGN KEY (group_id) REFERENCES `group` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `chat` ADD visibility VARCHAR(255) DEFAULT NULL');
    }
}
