<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250805212317 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE media ADD user_id INT NOT NULL, ADD article_id INT DEFAULT NULL, ADD session_id INT DEFAULT NULL, ADD spot_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10CA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C7294869C FOREIGN KEY (article_id) REFERENCES article (id)');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C613FECDF FOREIGN KEY (session_id) REFERENCES session (id)');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C2DF1D37C FOREIGN KEY (spot_id) REFERENCES spot (id)');
        $this->addSql('CREATE INDEX IDX_6A2CA10CA76ED395 ON media (user_id)');
        $this->addSql('CREATE INDEX IDX_6A2CA10C7294869C ON media (article_id)');
        $this->addSql('CREATE INDEX IDX_6A2CA10C613FECDF ON media (session_id)');
        $this->addSql('CREATE INDEX IDX_6A2CA10C2DF1D37C ON media (spot_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10CA76ED395');
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10C7294869C');
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10C613FECDF');
        $this->addSql('ALTER TABLE media DROP FOREIGN KEY FK_6A2CA10C2DF1D37C');
        $this->addSql('DROP INDEX IDX_6A2CA10CA76ED395 ON media');
        $this->addSql('DROP INDEX IDX_6A2CA10C7294869C ON media');
        $this->addSql('DROP INDEX IDX_6A2CA10C613FECDF ON media');
        $this->addSql('DROP INDEX IDX_6A2CA10C2DF1D37C ON media');
        $this->addSql('ALTER TABLE media DROP user_id, DROP article_id, DROP session_id, DROP spot_id');
    }
}
