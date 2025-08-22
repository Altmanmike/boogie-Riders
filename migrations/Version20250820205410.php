<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250820205410 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment ADD spot_id INT DEFAULT NULL, ADD event_id INT DEFAULT NULL, ADD club_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C2DF1D37C FOREIGN KEY (spot_id) REFERENCES `spot` (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C71F7E88B FOREIGN KEY (event_id) REFERENCES `event` (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C61190A32 FOREIGN KEY (club_id) REFERENCES `club` (id)');
        $this->addSql('CREATE INDEX IDX_9474526C2DF1D37C ON comment (spot_id)');
        $this->addSql('CREATE INDEX IDX_9474526C71F7E88B ON comment (event_id)');
        $this->addSql('CREATE INDEX IDX_9474526C61190A32 ON comment (club_id)');
        $this->addSql('ALTER TABLE `like` ADD spot_id INT DEFAULT NULL, ADD event_id INT DEFAULT NULL, ADD club_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B32DF1D37C FOREIGN KEY (spot_id) REFERENCES `spot` (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B371F7E88B FOREIGN KEY (event_id) REFERENCES `event` (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B361190A32 FOREIGN KEY (club_id) REFERENCES `club` (id)');
        $this->addSql('CREATE INDEX IDX_AC6340B32DF1D37C ON `like` (spot_id)');
        $this->addSql('CREATE INDEX IDX_AC6340B371F7E88B ON `like` (event_id)');
        $this->addSql('CREATE INDEX IDX_AC6340B361190A32 ON `like` (club_id)');
        $this->addSql('ALTER TABLE media ADD event_id INT DEFAULT NULL, ADD club_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C71F7E88B FOREIGN KEY (event_id) REFERENCES `event` (id)');
        $this->addSql('ALTER TABLE media ADD CONSTRAINT FK_6A2CA10C61190A32 FOREIGN KEY (club_id) REFERENCES `club` (id)');
        $this->addSql('CREATE INDEX IDX_6A2CA10C71F7E88B ON media (event_id)');
        $this->addSql('CREATE INDEX IDX_6A2CA10C61190A32 ON media (club_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE `comment` DROP FOREIGN KEY FK_9474526C2DF1D37C');
        $this->addSql('ALTER TABLE `comment` DROP FOREIGN KEY FK_9474526C71F7E88B');
        $this->addSql('ALTER TABLE `comment` DROP FOREIGN KEY FK_9474526C61190A32');
        $this->addSql('DROP INDEX IDX_9474526C2DF1D37C ON `comment`');
        $this->addSql('DROP INDEX IDX_9474526C71F7E88B ON `comment`');
        $this->addSql('DROP INDEX IDX_9474526C61190A32 ON `comment`');
        $this->addSql('ALTER TABLE `comment` DROP spot_id, DROP event_id, DROP club_id');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B32DF1D37C');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B371F7E88B');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B361190A32');
        $this->addSql('DROP INDEX IDX_AC6340B32DF1D37C ON `like`');
        $this->addSql('DROP INDEX IDX_AC6340B371F7E88B ON `like`');
        $this->addSql('DROP INDEX IDX_AC6340B361190A32 ON `like`');
        $this->addSql('ALTER TABLE `like` DROP spot_id, DROP event_id, DROP club_id');
        $this->addSql('ALTER TABLE `media` DROP FOREIGN KEY FK_6A2CA10C71F7E88B');
        $this->addSql('ALTER TABLE `media` DROP FOREIGN KEY FK_6A2CA10C61190A32');
        $this->addSql('DROP INDEX IDX_6A2CA10C71F7E88B ON `media`');
        $this->addSql('DROP INDEX IDX_6A2CA10C61190A32 ON `media`');
        $this->addSql('ALTER TABLE `media` DROP event_id, DROP club_id');
    }
}
