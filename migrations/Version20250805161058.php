<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250805161058 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE accessory ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE accessory ADD CONSTRAINT FK_A1B1251CA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_A1B1251CA76ED395 ON accessory (user_id)');
        $this->addSql('ALTER TABLE board ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE board ADD CONSTRAINT FK_58562B47A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_58562B47A76ED395 ON board (user_id)');
        $this->addSql('ALTER TABLE fin ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE fin ADD CONSTRAINT FK_AD2EF231A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_AD2EF231A76ED395 ON fin (user_id)');
        $this->addSql('ALTER TABLE leash ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE leash ADD CONSTRAINT FK_98760828A76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_98760828A76ED395 ON leash (user_id)');
        $this->addSql('ALTER TABLE wetsuit ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE wetsuit ADD CONSTRAINT FK_282F293FA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_282F293FA76ED395 ON wetsuit (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE accessory DROP FOREIGN KEY FK_A1B1251CA76ED395');
        $this->addSql('DROP INDEX IDX_A1B1251CA76ED395 ON accessory');
        $this->addSql('ALTER TABLE accessory DROP user_id');
        $this->addSql('ALTER TABLE board DROP FOREIGN KEY FK_58562B47A76ED395');
        $this->addSql('DROP INDEX IDX_58562B47A76ED395 ON board');
        $this->addSql('ALTER TABLE board DROP user_id');
        $this->addSql('ALTER TABLE fin DROP FOREIGN KEY FK_AD2EF231A76ED395');
        $this->addSql('DROP INDEX IDX_AD2EF231A76ED395 ON fin');
        $this->addSql('ALTER TABLE fin DROP user_id');
        $this->addSql('ALTER TABLE leash DROP FOREIGN KEY FK_98760828A76ED395');
        $this->addSql('DROP INDEX IDX_98760828A76ED395 ON leash');
        $this->addSql('ALTER TABLE leash DROP user_id');
        $this->addSql('ALTER TABLE wetsuit DROP FOREIGN KEY FK_282F293FA76ED395');
        $this->addSql('DROP INDEX IDX_282F293FA76ED395 ON wetsuit');
        $this->addSql('ALTER TABLE wetsuit DROP user_id');
    }
}
