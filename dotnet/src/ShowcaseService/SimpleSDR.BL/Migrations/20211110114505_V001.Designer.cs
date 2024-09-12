﻿// <auto-generated />
using System;
using MedicalResearch.SubjectData.Persistence.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MedicalResearch.SubjectData.Migrations
{
    [DbContext(typeof(SubjectDataDbContext))]
    [Migration("20211110114505_V001")]
    partial class V001
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("MedicalResearch.SubjectData.Persistence.SubjectEntity", b =>
                {
                    b.Property<Guid>("SubjectUid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ActualSiteIdentifier")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("EnrollingSiteIdentifier")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("EnrollmentDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("ResearchStudyUid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubjectIdentifier")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TerminatedReason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("TerminationDate")
                        .HasColumnType("datetime2");

                    b.HasKey("SubjectUid");

                    b.ToTable("SmsSubjects");
                });

            modelBuilder.Entity("MedicalResearch.SubjectData.Persistence.SubjectSiteAssignmentEntity", b =>
                {
                    b.Property<Guid>("SubjectSiteAssignmentUid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("ByInvolvedPersonUid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("SiteRelatedPatientIdentifier")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("SiteUid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("SubjectUid")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ValidFrom")
                        .HasColumnType("datetime2");

                    b.HasKey("SubjectSiteAssignmentUid");

                    b.HasIndex("SubjectUid");

                    b.ToTable("SmsSubjectSiteAssignments");
                });

            modelBuilder.Entity("MedicalResearch.SubjectData.Persistence.SubjectSiteAssignmentEntity", b =>
                {
                    b.HasOne("MedicalResearch.SubjectData.Persistence.SubjectEntity", "Subject")
                        .WithMany("SiteAssignments")
                        .HasForeignKey("SubjectUid")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("MedicalResearch.SubjectData.Persistence.SubjectEntity", b =>
                {
                    b.Navigation("SiteAssignments");
                });
#pragma warning restore 612, 618
        }
    }
}