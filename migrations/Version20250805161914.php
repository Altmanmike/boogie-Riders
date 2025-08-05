<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250805161914 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE spot_user (spot_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_78AE58BA2DF1D37C (spot_id), INDEX IDX_78AE58BAA76ED395 (user_id), PRIMARY KEY(spot_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE spot_user ADD CONSTRAINT FK_78AE58BA2DF1D37C FOREIGN KEY (spot_id) REFERENCES spot (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE spot_user ADD CONSTRAINT FK_78AE58BAA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE session ADD spot_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE session ADD CONSTRAINT FK_D044D5D42DF1D37C FOREIGN KEY (spot_id) REFERENCES spot (id)');
        $this->addSql('CREATE INDEX IDX_D044D5D42DF1D37C ON session (spot_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE spot_user DROP FOREIGN KEY FK_78AE58BA2DF1D37C');
        $this->addSql('ALTER TABLE spot_user DROP FOREIGN KEY FK_78AE58BAA76ED395');
        $this->addSql('DROP TABLE spot_user');
        $this->addSql('ALTER TABLE session DROP FOREIGN KEY FK_D044D5D42DF1D37C');
        $this->addSql('DROP INDEX IDX_D044D5D42DF1D37C ON session');
        $this->addSql('ALTER TABLE session DROP spot_id');
    }
}
