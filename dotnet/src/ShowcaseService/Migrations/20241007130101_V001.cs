using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalResearch.SubjectData.Migrations
{
    /// <inheritdoc />
    public partial class V001 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SdrSubjects",
                columns: table => new
                {
                    SubjectUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ActualSiteUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EnrollingSiteUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PeriodStart = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PeriodEnd = table.Column<DateTime>(type: "datetime2", nullable: true),
                    StatusNote = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SubjectIdentifier = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StudyUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ModificationTimestampUtc = table.Column<long>(type: "bigint", nullable: false),
                    IsArchived = table.Column<bool>(type: "bit", nullable: false),
                    AssignedArm = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ActualArm = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubstudyNames = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SdrSubjects", x => x.SubjectUid);
                });

            migrationBuilder.CreateTable(
                name: "SdrSubjectSiteAssignments",
                columns: table => new
                {
                    SubjectSiteAssignmentUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ValidFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SiteUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SubjectUid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SiteDefinedPatientIdentifier = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ByInvolvedPersonUid = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SdrSubjectSiteAssignments", x => x.SubjectSiteAssignmentUid);
                    table.ForeignKey(
                        name: "FK_SdrSubjectSiteAssignments_SdrSubjects_SubjectUid",
                        column: x => x.SubjectUid,
                        principalTable: "SdrSubjects",
                        principalColumn: "SubjectUid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SdrSubjectSiteAssignments_SubjectUid",
                table: "SdrSubjectSiteAssignments",
                column: "SubjectUid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SdrSubjectSiteAssignments");

            migrationBuilder.DropTable(
                name: "SdrSubjects");
        }
    }
}
